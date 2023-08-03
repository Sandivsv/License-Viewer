import React from 'react';
import './App.css';
import licenseData from './licenseData.json'


function App() {

  // const [data, setData] = useState(licenseData);

  return (
      <div className="license">
        <div className='header'> <div> License Checker</div></div>
        <div className='content-body'>
          {licenseData.map((data) => (
              <div className='content'> 
                <div> 
                  <div className='name ss'>Module Name: {data.name}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Version: {data.version}</div>
                  <div className='second'>
                      <div className='ss'>Licensed By: {data.license}</div>
                      { data.author === ""? ('')
                        : (  (data.author.name) ? (<div className='ss'>Author: {data.author.name}</div>) 
                              : (<div className='ss'>Author: {data.author}</div>)
                            
                        )
                      }
                  </div>
                  <div className='desc'>
                    Description: {data.description}
                  </div>
                  <div className='link'>
                    { data.homepage === ""? ('')
                      : (  <div><b>Homepage:</b>
                             <a href={data.homepage}>{data.homepage} </a>
                           </div>)
                    }

                    { data.repository === ""? ('')
                      : (  <div><b>Repository:</b>
                              <a href={data.repository}>{data.repository} </a>
                           </div>)
                    }
                  </div>

                  <div><b>About License</b>
                    {data.licenseDesc}
                  </div>
                </div>
              </div>
          ))}
         
          
        </div>
        
      </div>
  );
}

export default App;
