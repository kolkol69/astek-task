import { Route, Routes } from 'react-router-dom'

import { Layout } from 'src/components'
import { HomePage, PhotoPage } from 'src/views'

const AppRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="album/:albumId/photo/:photoId"
          element={<PhotoPage />}
        />
      </Route>
      {/* Fallback route */}
      <Route
        path="*"
        element={<div>404: The route doesn&apos;t exists</div>}
      />
    </Routes>
  )
}

export default AppRouting
