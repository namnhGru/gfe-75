import React, { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 6;

export default function JobBoard() {
    const [jobsID, setJobsID] = useState(null);
    const [loadedJob, setLoadedJob] = useState([]);
    const [page, setPage] = useState(0);

	// Loading button UX
	const [isFetching, setIsFetching] = useState(true)

	// will stay through re-render
	const isMounted = useRef(true)

    const baseUrl = "https://hacker-news.firebaseio.com/v0";
    const jobList = "/jobstories.json";
    const jobDetails = "/item";

    async function getJobsID(page) {
		let data = jobsID
        if (jobsID === null) {
            const response = await fetch(`${baseUrl}${jobList}`);
            data = await response.json();
            setJobsID(data);
        }
		
		const start = page * PAGE_SIZE;
		const end = Math.min(start + PAGE_SIZE, data.length)
		const jobsIDToLoad = data.slice(start, end);

		return jobsIDToLoad
    }
	
	async function getJobsDetailForCurrentPage() {
		const jobsIDToLoad = await getJobsID(page)
		setIsFetching(true)

		const resultJobs = await Promise.all(jobsIDToLoad.map(id => getJobDetail(id)));

		// if current page is changed before all fetch complete, ignore setLoadedJob
		if (!isMounted.current) return

		setIsFetching(false)

		setLoadedJob((prev) => [...prev, ...resultJobs]);
	}

    async function getJobDetail(id) {
		const response = await fetch(`${baseUrl}${jobDetails}/${id}.json`);
        const jobDetail = await response.json();
        return jobDetail;
    }
	

	// set cycle of component to prevent setLoadJob run if page is changed
	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false
		}
	}, [])
	
	// 1st time: fetch jobList, fetch 1st page
	// every time page change, skip if jobList fetched, only fetch new page
    useEffect(() => {
		getJobsDetailForCurrentPage()
    },[page]);

    function handleNewLoad() {
		setPage(prev => prev + 1)
	}

    return (
        <div>
        <h1>Hacker News Jobs Board</h1>
        {loadedJob.map((job, idx) => {
			const date = new Date(job.time * 1000)
            return (
            <div key={idx}>
                <h2>{job.title}</h2>
                <p>{`By ${job.by} - `}
                <span>{date.toLocaleString()}</span>
                </p>
            </div>
            );
        })}
        <button onClick={handleNewLoad}>{ isFetching ? "Loading..." : "Load more jobs"}</button>
        </div>
    );
    }
