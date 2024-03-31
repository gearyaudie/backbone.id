import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Reveal } from './reveal';

export const Socials = () => {
    return (
        <Reveal>
            <div className="bg-white shadow-lg mt-24 mb-12 max-w-xs mx-auto rounded-full px-12 py-4">
                Our Socials --{'>'}
                <InstagramIcon className="mx-2 ml-6" />
                <LinkedInIcon className="mx-2" />
            </div>
        </Reveal>
    )
}