import modern1 from '../assets/modern1.jpg'
import modern2 from '../assets/modern2.jpg'
import modern3 from '../assets/modern3.jpg'
import nature1 from '../assets/nature1.jpg'
import nature2 from '../assets/nature2.jpg'
import nature3 from '../assets/nature3.jpg'
import urban1 from '../assets/urban1.jpg'
import urban2 from '../assets/urban2.jpg'
import urban3 from '../assets/urban3.jpg'


export const exhibitions = [
  {
    slug: 'blue',
    title: 'Blue',
    location: 'Art Gallery',
    description: 'Blue art.',
    date: 'January 2025',
    images: [
      { src: modern1, description: 'Oil paint' },
      { src: modern2, description: 'Also oil paint' },
      { src: modern3, description: 'Guess what this is' }
    ],
  },
  {
    slug: 'nature-in-focus',
    title: 'Nature in Focus',
    location: 'The Arts House Trust',
    description: 'Exploring the beauty of natural landscapes.',
    date: 'July 2025',
    images: [
      { src: nature1, description: 'Oil paint' },
      { src: nature2, description: 'Also oil paint' },
      { src: nature3, description: 'Guess what this is' }
    ],
  },
  {
    slug: 'vast-lands',
    title: 'Vast Lands',
    location: 'Art Stead',
    description: 'Portraying the vast plains through paint.',
    date: 'January 2026',
    images: [
      { src: urban1, description: 'Oil paint' },
      { src: urban2, description: 'Also oil paint' },
      { src: urban3, description: 'Guess what this is' }
    ],
  },
];
