<template>
  <section class="blog-details">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="blog-details__left">
            <div class="blog-details__img">
              <img src="/images/resource/content-startegy-details.jpg" alt="" />
              <div class="blog-details__date">
                <span class="day">28</span>
                <span class="month">Aug</span>
              </div>
            </div>
            <div class="blog-details__content">
              <ul class="list-unstyled blog-details__meta">
                <li>
                  <NuxtLink to="news-details"
                    ><i class="fas fa-user-circle"></i> Admin</NuxtLink
                  >
                </li>
                <!-- <li>
                  <NuxtLink to="news-details"
                    ><i class="fas fa-comments"></i> 02 Comments</NuxtLink
                  >
                </li> -->
              </ul>
              <p class="blog-details__text-2">
                Over the years, I’ve created content strategies for companies
                like Google, Algolia, DocSend, and many more. No matter how big
                the company or how complicated its product, the content strategy
                always boiled down to answering three straightforward questions.
                These questions are adapted from the legendary book Good
                Strategy, Bad Strategy by Richard Rumelt. They’re designed to:
                identify the problem that needs solving; surface any unique
                strengths you can use in your strategy; and pair your problem
                with the right type of content for the job
              </p>
              <h3 class="blog-details__title">
                1. What challenges do you want to overcome?
              </h3>
              <p class="blog-details__text-2">
                Most companies have the same core problem: they need more
                customers, and they need more money from those customers. But
                every company is unique, and solving that problem usually
                requires overcoming a host of more specific challenges, like:
                Building a sales pipeline from scratch. Many newer companies
                turn to content to build demand for their product when there
                wasn’t demand before. Stopping reliance on advertising. It’s
                common for businesses to rely on paid advertising as their main
                source of customers, but at a certain point, it starts becoming
                too expensive to maintain. Getting more sales from existing
                traffic. In other cases, companies might generate plenty of
                traffic but struggle to convert those visitors into paying
                customers. Reducing customer churn. Some companies have plenty
                of visitors and leads, but struggle to keep people around once
                they become customers. Each of these challenges (and many
                others) can be helped by content. Crucially, the more specific
                you are with your diagnosis of your challenges, the easier it
                becomes to work out a solution.
              </p>
              <h3 class="blog-details__title">
                What’s the difference between the Gemini apps and Gemini models?
              </h3>
              <p class="blog-details__text-2">
                Google, proving once again that it lacks a knack for branding,
                didn’t make it clear from the outset that Gemini is separate and
                distinct from the Gemini apps on the web and mobile (formerly
                Bard). The Gemini apps are clients that connect to various
                Gemini models — Gemini Ultra (with Gemini Advanced, see below)
                and Gemini Pro so far — and layer chatbot-like interfaces on
                top. Think of them as front ends for Google’s generative AI,
                analogous to OpenAI’s ChatGPT and Anthropic’s Claude family of
                apps.
              </p>
              <h3 class="blog-details__title">
                2. What leverage can you exploit?
              </h3>
              <p class="blog-details__text-2">
                The best content strategies include leverage: your company’s
                secret weapon, something that makes content easier to create, or
                helps it perform better. Virtually every company has some type
                of leverage to use: Unique data. Many companies have access to
                unique data from their users or products. Personal brands.
                Others have the benefit of well-known founders or team members
                with big social media followings. Team expertise and skills.
                Some teams have unique experiences that can be turned into
                unique content (like our very own Patrick Stox, a.k.a. Mr
                Technical SEO). Network of experts. If you’re lucky to know lots
                of smart and brilliant people, you can include their experiences
                and perspectives throughout your content (like First Round
                Review, and their articles penned by seasoned startup founders).
                Recognizing and using your unique strengths is the key to
                creating a content strategy that can’t simply be copied by your
                competitors.
              </p>
              <h3 class="blog-details__title">
                3. Which types of content can overcome those challenges?
              </h3>
              <p class="blog-details__text-2">
                There are plenty of content types, from search content to sales
                enablement, each with its own strengths and weaknesses. Building
                the right content strategy is about choosing the right type for
                your specific challenges. For example, Search-optimized content
                is perfect for building a predictable source of website traffic,
                month over month… but it might not help to reach senior execs or
                founders who don’t Google common problems. Thought leadership
                content (like opinion pieces or research reports) can be great
                for generating word-of-mouth discussion and backlinks, but
                usually suffers from “spiky” traffic that doesn’t grow
                predictably each month. Sales enablement content (like case
                studies or gated content) helps to close sales deals, but it’s
                rarely interesting to the casual reader, and does little to
                attract new visitors to a company.
              </p>
            </div>
            <!-- <div class="blog-details__bottom">
                            <p class="blog-details__tags">
                                <span>Tags</span>
                                <NuxtLink to="news-details">Business</NuxtLink>
                                <NuxtLink to="#">Agency</NuxtLink>
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
                                            <NuxtLink to="what-is-google-gemini-ai">Google Gemini: Everything you need to know </NuxtLink>
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