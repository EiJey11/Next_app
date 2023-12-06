import AboutAside from '@/components/AboutAside'
import AboutMain from '@/components/AboutMain'
import React from 'react'

export default function About() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap">
                <AboutMain />
                <AboutAside />
            </div>
        </div>
    )
}
