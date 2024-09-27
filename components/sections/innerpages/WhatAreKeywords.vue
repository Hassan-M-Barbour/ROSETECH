<template>
    <section class="blog-details">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-7">
                    <div class="blog-details__left">
                        <div class="blog-details__img">
                            <img src="/images/resource/keywords.jpg" alt="" />
                            <div class="blog-details__date">
                                <span class="day">28</span>
                                <span class="month">Aug</span>
                            </div>
                        </div>
                        <div class="blog-details__content">
                            <ul class="list-unstyled blog-details__meta">
                                <li>
                                    <NuxtLink to="news-details"><i class="fas fa-user-circle"></i> Admin</NuxtLink>
                                </li>
                                <!-- <li>
                                    <NuxtLink to="news-details"><i class="fas fa-comments"></i> 02 Comments</NuxtLink>
                                </li> -->
                            </ul>
                            <p class="blog-details__text-2" style="text-align:justify;">
                                Keywords are the words and phrases that people type into search engines to find what
                                they’re looking for.
                                For example, if you were looking to buy a new jacket, you might type something like
                                “mens leather jacket” into Google. Even though that phrase consists of more than one
                                word, it’s still a keyword.

                                Of course, nobody outside of the SEO industry tends to use this terminology. Most people
                                would call them Google searches or queries. Just know that keywords are synonymous with
                                both of these things.

                                In this guide, you’ll learn:

                                Why keywords are important
                                How to show up in Google for keywords
                                How to find keywords
                                How to choose keywords
                                How to optimize for keywords
                                What long-tail keywords are
                            </p>
                            <h3 class="blog-details__title">How to appear in Google for keywords</h3>
                            <p class="blog-details__text-2" style="text-align:justify;">
                                Keywords are important because your website can show up when people type them into
                                search engines.

                                Showing up at the top of Google for a relevant keyword might send lots of traffic your
                                way, but how do you do that?

                                There are two ways.

                                PPC (Pay Per Click) advertising
                                SEO (Search Engine Optimization)
                            </p>
                            
                            <h5>Pay-per-click (PPC)</h5>
                            <p class="blog-details__text-2" style="text-align:justify;">
                            PPC is where you pay Google to show your web page in the results for specific keywords. For
                            example, if you sell email marketing software, you could bid on that term and appear at the
                            top of Google’s search results when people search for it.
                            This is known as PPC (Pay Per Click) advertising. Google has a platform where you can choose
                            keywords to bid on. Google then displays your ad in the search results. Every time someone
                            clicks that ad and lands on your website, Google charges you money.

                            You can tell paid results apart from organic (non-paid) results because they’re marked as
                            ads.
                            </p>
                            <h5>Search Engine Optimization (SEO)</h5>
                            <p class="blog-details__text-2" style="text-align:justify;">
                            SEO is the process of optimizing your web pages to rank in Google’s organic results. And
                            Google’s job is to rank the best, most relevant results for every search query.

                            If Google deems your page the “best” result for the right terms, you’ll get a consistent
                            stream of ‘free’ visits to your website.

                            For example, the Ahrefs blog gets an estimated 383,000 organic visits from Google every
                            month.

                            </p>
                            <h3 class="blog-details__title">How to find keywords</h3>
                            <p class="blog-details__text-2" style="text-align:justify;">
                                Most people have some idea of the keywords they want to rank for in Google. But it’s
                                impossible to know everything people search for. That’s why it pays to do some research
                                to find more keyword ideas.

                                There are many ways to do this, but the easiest method is to use a keyword research
                                tool.

                                Most of these tools work in the same way. You enter a few broad keywords related to your
                                industry called seed keywords, and the tool kicks back some related keyword ideas.

                                For example, say that you sell headphones online. Your seed keywords might be
                                “headphones,” “earbuds,” “earphones,” and “beats.”
                            </p>
                           
                        </div>
                        <!-- <div class="blog-details__bottom">
                            <p class="blog-details__tags">
                                <span>Tags</span>
                                <NuxtLink to="news-details">Business</NuxtLink>
                                <NuxtLink to="news-details">Agency</NuxtLink>
                            </p>
                            <div class="blog-details__social-list">
                                <NuxtLink to="news-details"><i class="fab fa-twitter"></i></NuxtLink>
                                <NuxtLink to="news-details"><i class="fab fa-facebook"></i></NuxtLink>
                                <NuxtLink to="news-details"><i class="fab fa-pinterest-p"></i></NuxtLink>
                                <NuxtLink to="news-details"><i class="fab fa-instagram"></i></NuxtLink>
                            </div>
                        </div> -->
                        <!-- <div class="nav-links">
                            <div class="prev">
                                <NuxtLink to="news-details" rel="prev">Bring to the table win-win survival strategies
                                </NuxtLink>
                            </div>
                            <div class="next">
                                <NuxtLink to="news-details" rel="next">How to lead a healthy &amp; well-balanced life
                                </NuxtLink>
                            </div>
                        </div> -->
                        <!-- <div class="comment-one">
                            <h3 class="comment-one__title">2 Comments</h3>
                            <div class="comment-one__single">
                                <div class="comment-one__image">
                                    <img src="/images/resource/testi-1.jpg" alt="" />
                                </div>
                                <div class="comment-one__content">
                                    <h3>Kevin Martin</h3>
                                    <p>
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                        Aliquam tellus nulla, sollicitudin at euismod.
                                    </p>
                                    <NuxtLink to="news-details" class="theme-btn btn-style-one comment-one__btn"><span
                                            class="btn-title">Reply</span></NuxtLink>
                                </div>
                            </div>
                            <div class="comment-one__single">
                                <div class="comment-one__image">
                                    <img src="/images/resource/testi-2.jpg" alt="" />
                                </div>
                                <div class="comment-one__content">
                                    <h3>Sarah Albert</h3>
                                    <p>
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                        Aliquam tellus nulla, sollicitudin at euismod.
                                    </p>
                                    <NuxtLink to="news-details" class="theme-btn btn-style-one comment-one__btn"><span
                                            class="btn-title">Reply</span></NuxtLink>
                                </div>
                            </div>
                            <div class="comment-form">
                                <h3 class="comment-form__title">Leave a Comment</h3>
                                <form id="contact_form" name="contact_form" class="" action="includes/sendmail.php"
                                    method="post">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="mb-3">
                                                <input name="form_name" class="form-control" type="text"
                                                    placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="mb-3">
                                                <input name="form_email" class="form-control required email"
                                                    type="email" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <textarea name="form_message" class="form-control required" rows="5"
                                            placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <input name="form_botcheck" class="form-control" type="hidden" value="" />
                                        <button type="submit" class="theme-btn btn-style-one"
                                            data-loading-text="Please wait...">
                                            <span class="btn-title">Submit Comment</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <div class="sidebar">
                        <div class="sidebar__single sidebar__search">
                            <!-- <form action="#" class="sidebar__search-form">
                                <input type="search" placeholder="Search here" />
                                <button type="submit"><i class="lnr-icon-search"></i></button>
                            </form> -->
                        </div>
                        <div class="sidebar__single sidebar__post">
                            <h3 class="sidebar__title">Latest Posts</h3>
                            <ul class="sidebar__post-list list-unstyled">
                                <li>
                                    <div class="sidebar__post-image">
                                        <img src="/images/resource/news-1.jpg" alt="" />
                                    </div>
                                    <div class="sidebar__post-content">
                                        <h3>
                                            <span class="sidebar__post-content-meta"><i
                                                    class="fas fa-user-circle"></i>Admin</span>
                                            <NuxtLink to="what-is-google-gemini-ai">Google Gemini: Everything you need to know</NuxtLink>
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar__post-image">
                                        <img src="/images/resource/news-2.jpg" alt="" />
                                    </div>
                                    <div class="sidebar__post-content">
                                        <h3>
                                            <span class="sidebar__post-content-meta"><i
                                                    class="fas fa-user-circle"></i>Admin</span>
                                            <NuxtLink to="content-strategy-examples">3 Unique Content Strategy Examples</NuxtLink>
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar__post-image">
                                        <img src="/images/resource/news-3.jpg" alt="" />
                                    </div>
                                    <div class="sidebar__post-content">
                                        <h3>
                                            <span class="sidebar__post-content-meta"><i
                                                    class="fas fa-user-circle"></i>Admin</span>
                                            <NuxtLink to="what-are-keywords">What Are Keywords? How to Use Them for SEO</NuxtLink>
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="sidebar__single sidebar__category">
                            <h3 class="sidebar__title">Categories</h3>
                            <ul class="sidebar__category-list list-unstyled">
                                <li>
                                    <NuxtLink to="news-details">Business<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                                <li class="active">
                                    <NuxtLink to="news-details">Digital Agency<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="news-details">Introductions<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="news-details">New Technologies<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="news-details">Parallax Effects<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="news-details">Web Development<span class="icon-right-arrow"></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div> -->
                        <!-- <div class="sidebar__single sidebar__tags">
                            <h3 class="sidebar__title">Tags</h3>
                            <div class="sidebar__tags-list">
                                <NuxtLink to="#">Consulting</NuxtLink>
                                <NuxtLink to="#">Agency</NuxtLink>
                                <NuxtLink to="#">Business</NuxtLink>
                                <NuxtLink to="#">Digital</NuxtLink>
                                <NuxtLink to="#">Experience</NuxtLink>
                                <NuxtLink to="#">Technology</NuxtLink>
                            </div>
                        </div> -->
                        <!-- <div class="sidebar__single sidebar__comments">
                            <h3 class="sidebar__title">Recent Comments</h3>
                            <ul class="sidebar__comments-list list-unstyled">
                                <li>
                                    <div class="sidebar__comments-icon">
                                        <i class="fas fa-comments"></i>
                                    </div>
                                    <div class="sidebar__comments-text-box">
                                        <p>
                                            A wordpress commenter on <br />
                                            launch new mobile app
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar__comments-icon">
                                        <i class="fas fa-comments"></i>
                                    </div>
                                    <div class="sidebar__comments-text-box">
                                        <p><span>John Doe</span> on template:</p>
                                        <h5>comments</h5>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar__comments-icon">
                                        <i class="fas fa-comments"></i>
                                    </div>
                                    <div class="sidebar__comments-text-box">
                                        <p>
                                            A wordpress commenter on <br />
                                            launch new mobile app
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="sidebar__comments-icon">
                                        <i class="fas fa-comments"></i>
                                    </div>
                                    <div class="sidebar__comments-text-box">
                                        <p><span>John Doe</span> on template:</p>
                                        <h5>comments</h5>
                                    </div>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>