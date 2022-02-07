import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ onToggleTheme, icon }) {
  const history = useHistory();

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {icon}
      </button>
      <button onClick={handleNavigate}>
        Voltar para Home
      </button>
    </Container>
  )
}

// export default class Header extends React.Component {
  
//   render() {
//     const { onToggleTheme, icon } = this.props;

//     return (
//       <Container>
//         <h1>JStack's Blog</h1>
//         <button
//           type="button"
//           onClick={onToggleTheme}
//         >
//           {icon}
//         </button>
//       </Container>
//     )
//   }
// }