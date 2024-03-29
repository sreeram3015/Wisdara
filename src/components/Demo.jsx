import React, { useEffect, useState } from "react";
import { linkIcon, copy, loader } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });

    const [allArticles, setAllArticles] = useState([]);

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles')
        );

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!article.url) {
                throw new Error("Article URL is empty");
            }

            // Check if the URL already exists in history
            const isDuplicate = allArticles.some(item => item.url === article.url);
            if (isDuplicate) {
                // Skip adding the URL to history if it's a duplicate
                return;
            }

            const { data } = await getSummary({ articleUrl: article.url });
            let newArticle = { ...article }; // Declare newArticle outside the if block

            if (data?.summary) {
                newArticle = { ...newArticle, summary: data.summary }; // Update newArticle if summary is available
            }

            const updatedAllArticles = [newArticle, ...allArticles];

            setArticle(newArticle);
            setAllArticles(updatedAllArticles);

            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        } catch (error) {
            console.error("Error fetching article summary:", error);
            if (error.response && error.response.status === 403) {
                alert("Access to this resource is forbidden. Please check your URL or try again later.");
            } else {
                alert("An error occurred while fetching the article summary. Please try again later.");
            }
        }
    };

    const handleClearHistory = () => {
        setAllArticles([]); // Clear the history from state
        localStorage.removeItem('articles'); // Clear the history from localStorage
    };



    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                    <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />

                    <input
                        type="url"
                        placeholder="Enter your URL"
                        value={article.url}
                        onChange={(e) => {
                            setArticle({
                                ...article,
                                url: e.target.value
                            })
                        }}
                        required
                        className="url_input peer"
                    />

                    <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
                        ↵
                    </button>
                </form>

                <button type='button'
                    onClick={handleClearHistory}
                    className='black_btn font-bold'>
                    Clear History
                </button>


                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {allArticles.map((item, index) => (
                        <div key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className="link_card">
                            <div className="copy_btn">
                                <img src={copy} alt="copy_icon"
                                    className="w-[40%] h-[40%]
                                object-contain" />
                            </div>

                            <p className="flex-1 font-satoshi text-blue-700
                            font-medium text-sm truncate">
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="my-10 max-w-full flex justify-center items-center">
                {isFetching ? (
                    <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
                ) : error ? (
                    <p className="font-inter font-bold text-black text-center">
                        An unexpected error occurred! <br />

                        <span className="font-satoshi font-normal text-gray-700">
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                                Article <span className="blue_gradient">Summary</span>
                            </h2>

                            <div className="summary_box">
                                <p className="font-inter font-medium
                                text-sm text-gray-700">{article.summary}</p>
                            </div>
                        </div>
                    )
                )}
            </div>


        </section >
    );
};

export default Demo;
