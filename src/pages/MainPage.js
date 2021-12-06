const DUMMY_DATA = [
    {
        id:'a1',
        title: 'Article 1',
        date: 'Aug 8, 2013',
        image: '',
        content: 'Claritas est etiam processus dynamicus, quisequitur mutationem consuetudium lectorum.Mirum est notare quam littera gothica, quam.',
    },
    {
        id:'a2',
        title: 'Article 2',
        date: 'Aug 14, 2013',
        image: '',
        content: 'Claritas est etiam processus dynamicus, quisequitur mutationem consuetudium lectorum.Mirum est notare quam littera gothica, quam.',
    },
    {
        id:'a3',
        title: 'Article 3',
        date: 'Aug 21, 2013',
        image: '',
        content: 'Claritas est etiam processus dynamicus, quisequitur mutationem consuetudium lectorum.Mirum est notare quam littera gothica, quam.',
    }
]

function MainPage() {
    return (
        <section>
            <div className='section-top'>
                <div className='container'>
                <div className='wrapper'>
                    <h2>Well, Hello there</h2>
                    <h1>This is where your <br />message should go.</h1>
                    <button>DOWNLOAD NOW</button>
                </div>
                </div>
            </div>
            <div className='section-middle'>
                <div className='container'>
                {DUMMY_DATA.map((article) => {
                    return <div className='grid' key={article.id}>
                        <div className='article-image'></div>
                        <div className='article-title'>{article.title}</div>
                        <div className='article-date'>{article.date}</div>
                        <div className='article-content'>{article.content}</div>
                    </div>;
                })}
                </div>
            </div>
            <div className='section-bottom'>
                <div className='container'>
                <div className='image-wrap'>
                    <div className='image'></div>
                </div>
                <div className='content-wrap'>
                    <h2 className='title'>Get the New Razda template</h2>
                    <h3 className='sub-title'>The best new way to showcase your work</h3>
                    <div className='content'>Nam liber tempor cum soluta nobis eleifend optioncongue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectoru</div>
                    <button>DOWNLOAD NOW</button>
                </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;