import { useEffect } from "react";
import { useParams,Route,Link} from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp  from "../hooks/use-http";
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetail = () =>{

   const param = useParams(); 
   

   const { quoteId } = param; 
   const {sendRequest,status, data : loadedQuote, error} =useHttp(getSingleQuote, true);
  
   useEffect(() => {
      sendRequest(quoteId);
   },[sendRequest, quoteId])

   
   if (status === 'pending' ) {
      return(
        <div className="centered">
         <LoadingSpinner/>
        </div>
      )
   }
   if(error){
    return <p>{error}</p>
   }

   if(!loadedQuote.text){
    <p>No Quote found!</p>
   }
   

   return(
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
      <Route path={`/quotes/${param.quoteId}`} exact>
        <div className="centered">
          <Link className='btn--flat' to={`/quotes/${param.quoteId}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments/>
      </Route>
      
    </>
   )
}

export default QuoteDetail;