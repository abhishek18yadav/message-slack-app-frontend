import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from '@/Routes';
import { AppContextProvider } from './context/AppContextProvider';
import { Modals } from './components/organisms/Modal/Modals';
export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals/>
      </AppContextProvider>
         <Toaster/>
    </QueryClientProvider>
  );
}