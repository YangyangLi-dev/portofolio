interface BlogPostProps {
    title:string;
    except:string;
    date:string;
    slug:string;
}

export function BlogPost({title,except,date,slug}:BlogPostProps){
    return(
        <article>
            <h2>{title}</h2>
            <p>{except}</p>
            
        </article>
    );
}