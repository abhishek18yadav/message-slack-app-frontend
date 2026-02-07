import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from '@/Routes';
import { AppContextProvider } from './context/AppContextProvider';
export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes/>
      </AppContextProvider>
         <Toaster/>
    </QueryClientProvider>
  );
}