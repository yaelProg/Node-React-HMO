import axios from 'axios';

const newComp = async () => {
    const [{data, loading, error},refetch] = useAxios(`http://localhost:2024/api/members`);

    const dispatch = useDispatch();
    
    if(loading){
      return <p>Loading...</p>
    }
    
    if(error){
      return <p>Error: {error.message}</p>
    }
    dispatch(setMember({data, refetch}))   

}
export default newComp;