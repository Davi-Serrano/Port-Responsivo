import React from 'react';
import { Table } from 'reactstrap';

const Stacks = (props) => {
  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th> Stack</th>
          <th> Nível</th>
          <th>Projetos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>HTML</td>
          <td>Intermediário</td>
          <td>8</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>CSS</td>
          <td>Intermediário</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>SASS</td>
          <td>Básico</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Bootstrap</td>
          <td>Básicio</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>JavaScript</td>
          <td>Básico\Intermediário</td>
          <td>6</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>React.JS</td>
          <td>Básico</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Node.js</td>
          <td>Básico</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Mongodb</td>
          <td>Básico</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>GIT</td>
          <td>Básico</td>
          <td>&#9481;</td>
        </tr>
   
   
   
   
      </tbody>
      

    </Table>
  );
}

export default Stacks;