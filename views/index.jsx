const React = require('react');
const DefaultLayout = require('./layouts/default');

function HelloMessage({projects}) {
  return (
    <DefaultLayout>
      <h2>Index</h2>
      {/* <p> I want to see {projects[0].name}</p> */}
      {
        projects.map((item, index) => {
          return (
            // <div>
            //   <h2 key={index}>{item.name}</h2>
            //   <img src={item.image}/>
            // </div>
            <li key={index}>
              <a href={`/project/${index}`}>{item.name}</a>
            </li>
          )
        })
      }
      <a href="/projects/new">
        <button>Add New Project</button>
      </a>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;