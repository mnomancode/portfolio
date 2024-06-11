import {Inter , Lusitana} from 'next/font/google';
import localFont from 'next/font/local'


export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter",

});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],

});

export const calSans = localFont({ src: '../public/fonts/CalSans-SemiBold.ttf' ,variable: "--font-calsans", })

