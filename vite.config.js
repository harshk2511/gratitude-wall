import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // createPost: 'createPost.html',
        // publicWall: 'publicWall.html',
        // publicUserProfile: 'publicUserProfile.html',
        // privateUserProfile: 'privateUserProfile.html'
      }
    }
  }
})



