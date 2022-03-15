const Main = () => {
  let username = sessionStorage.getItem("username");
  return( 
    <>
      <h2>Main</h2>
      <div>{username?username:"login please please"}</div>    
            
    </>
  );
};

export default Main