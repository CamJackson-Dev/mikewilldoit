import { FC } from 'react';

interface LogoType {
    className?: string;
}

const Logo: FC<LogoType> = ({ className }) => {
    return (
        <svg
            className={className}
            fill="none"
            height="50"
            viewBox="0 0 86 50"
            width="86"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Mike Fiat</title>
            <path
                clipRule="evenodd"
                d="M 12.007812 0 A 1.0001 1.0001 0 0 0 11 1 L 11 13.353516 A 1.0001 1.0001 0 0 0 11.566406 14.255859 L 29.566406 22.902344 A 1.0001 1.0001 0 0 0 30.554688 22.832031 L 39.554688 16.832031 A 1.0001 1.0001 0 0 0 39.486328 15.125 L 12.486328 0.125 A 1.0001 1.0001 0 0 0 12.007812 0 z M 13 2.7011719 L 37.080078 16.078125 L 29.919922 20.851562 L 13 12.724609 L 13 2.7011719 z M 11.958984 17 A 1.0001 1.0001 0 0 0 11 18 L 11 49 A 1.0001 1.0001 0 0 0 11.001953 49.033203 A 1.0001 1.0001 0 0 0 11.009766 49.121094 A 1.0001 1.0001 0 0 0 11.011719 49.148438 A 1.0001 1.0001 0 0 0 11.025391 49.224609 A 1.0001 1.0001 0 0 0 11.033203 49.253906 A 1.0001 1.0001 0 0 0 11.048828 49.304688 A 1.0001 1.0001 0 0 0 11.080078 49.388672 A 1.0001 1.0001 0 0 0 11.123047 49.478516 A 1.0001 1.0001 0 0 0 11.175781 49.564453 A 1.0001 1.0001 0 0 0 11.222656 49.626953 A 1.0001 1.0001 0 0 0 11.251953 49.660156 A 1.0001 1.0001 0 0 0 11.283203 49.693359 A 1.0001 1.0001 0 0 0 11.310547 49.720703 A 1.0001 1.0001 0 0 0 11.361328 49.767578 A 1.0001 1.0001 0 0 0 11.390625 49.791016 A 1.0001 1.0001 0 0 0 11.439453 49.826172 A 1.0001 1.0001 0 0 0 11.46875 49.845703 A 1.0001 1.0001 0 0 0 11.546875 49.890625 A 1.0001 1.0001 0 0 0 11.625 49.925781 A 1.0001 1.0001 0 0 0 11.648438 49.935547 A 1.0001 1.0001 0 0 0 11.697266 49.951172 A 1.0001 1.0001 0 0 0 11.757812 49.96875 A 1.0001 1.0001 0 0 0 11.791016 49.976562 A 1.0001 1.0001 0 0 0 11.839844 49.986328 A 1.0001 1.0001 0 0 0 11.914062 49.994141 A 1.0001 1.0001 0 0 0 11.929688 49.996094 A 1.0001 1.0001 0 0 0 11.941406 49.996094 A 1.0001 1.0001 0 0 0 12.029297 49.998047 A 1.0001 1.0001 0 0 0 12.128906 49.990234 A 1.0001 1.0001 0 0 0 12.207031 49.976562 A 1.0001 1.0001 0 0 0 12.228516 49.972656 A 1.0001 1.0001 0 0 0 12.259766 49.964844 A 1.0001 1.0001 0 0 0 12.324219 49.945312 A 1.0001 1.0001 0 0 0 12.326172 49.945312 A 1.0001 1.0001 0 0 0 12.416016 49.908203 A 1.0001 1.0001 0 0 0 12.496094 49.869141 L 40.496094 33.869141 A 1.0001 1.0001 0 0 0 41 33 L 41 20 A 1.0001 1.0001 0 0 0 39.28125 19.304688 L 14.185547 45.296875 L 20.955078 23.294922 A 1.0001 1.0001 0 0 0 20.529297 22.152344 L 12.529297 17.152344 A 1.0001 1.0001 0 0 0 11.958984 17 z M 13 19.804688 L 18.818359 23.441406 L 13 42.351562 L 13 19.804688 z M 39 22.474609 L 39 32.419922 L 17.582031 44.658203 L 39 22.474609 z"
                fill="#62EDD1"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default Logo;