import Layout from "../../components/layout"

const Article = (data) => {
    console.log(data);
    return ( 
        <>
            <Layout/>
            <article>
                <h2>{data.data.title}</h2>
                <p>{data.data.discription}</p>
                <p>{data.data.content}</p>
            </article>
        </>
     );
}
 
export default Article;

export const getStaticPaths = async () => {
const res = await fetch(`${process.env.STRAPI_URL}/articles`);
const data = await res.json()

return{
paths: data.map((article) => ({params: {slug: ""+ article.slug}})),
fallback: false,
};
};

export async function getStaticProps({ params }) {
  console.log(params.title);
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`${process.env.STRAPI_URL}/articles/${params.slug}`);
  const data = await res.json()

  // The value of the `props` key will be
  //  passed to the `Home` component
    if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}