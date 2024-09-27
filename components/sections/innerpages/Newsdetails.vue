<template>
  <section class="blog-details">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="blog-details__left">
            <div class="blog-details__img">
              <img src="/images/resource/news-details-1.jpg" alt="" />
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
              <p class="blog-details__text-2" style="text-align: justify;">
                Google’s trying to make waves with Gemini, its flagship suite of
                generative AI models, apps and services. So what’s Google
                Gemini, exactly? How can you use it? And how does Gemini stack
                up to the competition? To make it easier to keep up with the
                latest Gemini developments, we’ve put together this handy guide,
                which we’ll keep updated as new Gemini models, features and news
                about Google’s plans for Gemini are released.
              </p>
              <h3 class="blog-details__title">What is Gemini?</h3>
              <p class="blog-details__text-2" style="text-align: justify;">
                Gemini is Google’s long-promised, next-gen generative AI model
                family, developed by Google’s AI research labs DeepMind and
                Google Research. It comes in four flavors:
              </p>
                <ul style="padding-left: 2rem; ">
                    <li style="list-style-type:disc;">
                        Gemini Ultra, the most performant Gemini model. 
                        </li>
                        <li style="list-style-type:disc;">
                            Gemini Pro, a lightweight alternative to Ultra. 
                        </li>
                        <li style="list-style-type:disc;">
                            Gemini Flash, a speedier, “distilled” version of Pro.
                        </li>
                        <li style="list-style-type:disc;">
                            Gemini Nano, two small models — Nano-1 and the more capable Nano-2 — meant to run offline on mobile devices.
                        </li>
                </ul>
               
                  
               
               <p style="text-align: justify;">

                All Gemini models were trained to be natively multimodal — in
                other words, able to work with and analyze more than just text.
                Google says that they were pre-trained and fine-tuned on a
                variety of public, proprietary and licensed audio, images and
                videos, a large set of codebases and text in different
                languages. This sets Gemini apart from models such as Google’s
                own LaMDA, which was trained exclusively on text data. LaMDA
                can’t understand or generate anything beyond text (e.g., essays,
                email drafts), but that isn’t necessarily the case with Gemini
                models. We’ll note here that the ethics and legality of training
                models on public data, in some cases without the data owners’
                knowledge or consent, are murky indeed. Google has an AI
                indemnification policy to shield certain Google Cloud customers
                from lawsuits should they face them, but this policy contains
                carve-outs. Proceed with caution, particularly if you’re
                intending on using Gemini commercially.
              </p>
              <h3 class="blog-details__title">
                What’s the difference between the Gemini apps and Gemini models?
              </h3>
              <p class="blog-details__text-2" style="text-align: justify;">
                Google, proving once again that it lacks a knack for branding,
                didn’t make it clear from the outset that Gemini is separate and
                distinct from the Gemini apps on the web and mobile (formerly
                Bard).  — Gemini Ultra (with Gemini Advanced, see below)
                and Gemini Pro so far —  Think of them as front ends for Google’s generative AI,
                analogous to OpenAI’s ChatGPT and Anthropic’s Claude family of
                apps.
              </p>
              <h3 class="blog-details__title">
                Gemini in Gmail, Docs, Chrome, dev tools and more
              </h3>
              <p class="blog-details__text-2" style="text-align: justify;">
                The Gemini apps aren’t the only means of recruiting Gemini
                models’ assistance with tasks. Slowly but surely, Gemini-imbued
                features are making their way into staple Google apps and
                services like Gmail and Google Docs. To take advantage of most
                of these, you’ll need the Google One AI Premium Plan.
                Technically a part of Google One, the AI Premium Plan costs $20
                and provides access to Gemini in Google Workspace apps like
                Docs, Slides, Sheets and Meet. It also enables what Google calls
                Gemini Advanced, which brings Gemini Ultra to the Gemini apps
                plus support for analyzing and answering questions about
                uploaded files.
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
                        </div>-->
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