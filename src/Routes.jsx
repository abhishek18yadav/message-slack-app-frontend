
import { Route,Routes } from 'react-router-dom';
import { WorkspaceLayout } from './pages/workspace/layout';
import { SignupConatiner } from '@/components/organisms/Auth/SignupContainer.jsx';
import { SigninContainer } from '@/components/organisms/Auth/SigninContainer.jsx';
import { Auth } from '@/pages/Auth/Auth.jsx';
import { NotFound } from '@/pages/Not Found/NotFound.jsx';
import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { Home } from './pages/Home/Home';
import { JoinPage } from './pages/workspace/JoinPage';
import { Channel } from './pages/workspace/Channel/Channel';
export default function AppRoutes() {
  return (
      <Routes>
        <Route path='/auth/signin' element={<Auth><SigninContainer/> </Auth>} />
        <Route path='/auth/signup' element={<Auth><SignupConatiner /></Auth>} />
      <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />   
      <Route path="/workspace/:workspaceId" element={<ProtectedRoute><WorkspaceLayout><Channel/></WorkspaceLayout></ProtectedRoute>} />
      <Route path="/workspace/:workspaceId/channels/:channelId" element={<ProtectedRoute><WorkspaceLayout><Channel/></WorkspaceLayout></ProtectedRoute>} />
      <Route path="/workspace/join/:workspaceId" element={<JoinPage/>} />
        <Route path='*' element={<NotFound />} />  
      </Routes>
  );
}