const React = require('react');
const DefaultLayout = require('./layouts/default');

function HelloMessage({project}) {
  return (
    <DefaultLayout>
      <h2>Index</h2>
      {/* <p> I want to see {project[0].name}</p> */}
      {
        project.map((item, index) => {
          return (
            // <div>
            //   <h2 key={index}>{item.name}</h2>
            //   <img src={item.image}/>
            // </div>
            <li>
              <a href={`/project/${index}`}>{item.name}</a>
            </li>
          )
        })
      }
    </DefaultLayout>
  );
}

module.exports = HelloMessage;