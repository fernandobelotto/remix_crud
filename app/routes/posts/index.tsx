import React, { ReactElement } from 'react'
import { Link } from 'remix'

interface Props {

}

export default function Index(): ReactElement {
    return (
        <>
            <h1>Posts</h1>
            <Link to={'/'}>posts</Link>

        </>
    )
}
