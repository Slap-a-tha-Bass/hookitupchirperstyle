import React from 'react'

const ChirpLayout = ({ children }) => {
    return (
        <section className="row justify-content-center">
            <div className="col-md-6">
                {children}
            </div>
        </section>
    )
}

export default ChirpLayout
