import React from 'react'

export const ThreeDotsMenu = (props) => {
    return (
        <>
            <svg
                width={props.width}
                height={props.height}
                fill={props.fill}
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.8333 5.41667C10.8333 5.84519 10.9604 6.2641 11.1985 6.6204C11.4365 6.97671 11.7749 7.25442 12.1708 7.41841C12.5667 7.5824 13.0024 7.6253 13.4227 7.5417C13.843 7.4581 14.229 7.25175 14.5321 6.94873C14.8351 6.64572 15.0414 6.25966 15.125 5.83936C15.2086 5.41907 15.1657 4.98343 15.0017 4.58752C14.8377 4.19161 14.56 3.85323 14.2037 3.61515C13.8474 3.37707 13.4285 3.25 13 3.25"
                    stroke="#444050"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
                <path
                    d="M10.8333 13C10.8333 14.1967 11.8034 15.1667 13 15.1667C14.1966 15.1667 15.1667 14.1967 15.1667 13C15.1667 11.8034 14.1966 10.8334 13 10.8334C11.8034 10.8334 10.8333 11.8034 10.8333 13Z"
                    stroke="#444050"
                    strokeWidth="1.4"
                />
                <path
                    d="M13 22.75C12.5715 22.75 12.1526 22.6229 11.7963 22.3848C11.4399 22.1467 11.1622 21.8083 10.9982 21.4124C10.8343 21.0165 10.7914 20.5809 10.875 20.1606C10.9586 19.7403 11.1649 19.3542 11.4679 19.0512C11.7709 18.7482 12.157 18.5419 12.5773 18.4583C12.9976 18.3747 13.4332 18.4176 13.8291 18.5816C14.225 18.7455 14.5634 19.0233 14.8015 19.3796C15.0396 19.7359 15.1667 20.1548 15.1667 20.5833"
                    stroke="#444050"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
            </svg>
        </>
    )
}