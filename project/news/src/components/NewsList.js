import styled from 'styled-components';
import NewsItem from './NewsItem';
import {useState, useEffect} from 'react';
import axios from 'axios';


const NewsListBlock = styled.div`
    box-sizing: border-box;
    width: 768px;
    margin:0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=75f4d306d385457b903bb70cfa9b8b90',
                );
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    //대기중일때
    if(loading) {
        return < NewsListBlock>대기중 ...</NewsListBlock>;
    }

    //아직 articles 값이 설정되지 않았을 때
    if(!articles){
        return null;
    }

    //articles 값이 유효할 때
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;