

function AApp() {

const [list , SetList] = useState([]);

useEffect(()=> {
  axios.get('/board/list').then((res)=>{
    SetList(res.data)
    console.log(res)
  })
},[])

  return (
    <div className="App">

      <h1>List</h1>
      {
        list.map(function(a,i){
          return(
            <div>
            <div>{list[i].id}</div>
            <div>{list[i].title}</div>
            <div>{list[i].content}</div>
            </div>
          )
        })
      }


    </div>


  );
}