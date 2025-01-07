import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import styles from './wrapper.module.css';

const queryClient = new QueryClient();

function QueryClientProviderWrapper({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </QueryClientProvider>
  );
}

export default QueryClientProviderWrapper;
