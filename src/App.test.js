import { render, screen } from '@testing-library/react';
import App from './App';
import Catalogo from './pages/catalogo/Catalogopage'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  test('given user clicks on catalogo button, then go to catalogo page', async () => {
    render(
      <BrowserRouter>
      <Routes>
        
        <Route path='/Catalogo' element={<Catalogo/>}></Route>
      </Routes>
      </BrowserRouter>
    );

    const catalogoButton = screen.getByTestId('catalogo-button');
    await userEvent.click(catalogoButton);

    expect(window.location.pathname).toEqual('/Catalogo');
  })
});
