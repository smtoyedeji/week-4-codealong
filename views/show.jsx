const React = require('react');
const DefaultLayout = require('./layouts/default');

function Show({ project }) {
  return (
    <DefaultLayout>
      <h2>Show Pages</h2>
      <h3>{project.name}</h3>
      <p>and it 
        {project.hasDatabase ? <span> has </span> : <span> does not have </span>}
        a database
      </p>
      <img src={project.image} alt={project.name}/>
    </DefaultLayout>
  );
}

module.exports = Show;