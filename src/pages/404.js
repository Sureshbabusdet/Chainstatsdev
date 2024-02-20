// pages/404.js
import ErrorPage from '@/components/ErrorPage';
import MainLayout from '@/layouts/main/nav/MainLayout';

export default function Custom404() {
  return (
    <ErrorPage statusCode={404} />
  );
}
