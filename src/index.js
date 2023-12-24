import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { AllRoutes } from './component/routes/routers.tsx';
import { Provider } from 'react-redux';
import { store } from './component/store/store';
import { QueryClient, QueryClientProvider, } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AllRoutes} />
      </QueryClientProvider>

    </Provider>
  </React.StrictMode>
);


