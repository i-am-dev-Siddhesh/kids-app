import Head from "next/head";
import { QuestionTemplate } from "../components/QuestionTemplate";

export default function Home() {
    return (
        <div>
            <Head>
                <title>QA App</title>
                <meta name="description" content="Question and answer app" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600`&rsquo;`family=Hurricane`&rsquo;`display=swap');
                </style>
            </Head>

            <QuestionTemplate />
        </div>
    );
}
