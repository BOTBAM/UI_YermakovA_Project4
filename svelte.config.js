import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel({
      runtime: 'nodejs20.x'
    })
  }
};