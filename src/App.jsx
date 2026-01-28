// src/App.jsx

import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import TodoPage from './pages/TodoPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const cls = {
    app: 'app',
    shell: 'shell',
  };

  return (
    <>
      <div className={cls.app}>
        <header className={cls.shell}>
          <NavBar brand="Task X" />
        </header>

        <main className={cls.shell}>
          <Routes>
            <Route path="/" element={<Navigate to="/todos" replace />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/todos" replace />} />
          </Routes>
        </main>

        <footer className={cls.shell}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
