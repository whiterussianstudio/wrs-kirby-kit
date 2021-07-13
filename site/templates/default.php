<?= snippet('head') ?>

<div x-data="App.scrollBehavior()" 
      x-init="init()" 
      data-scroll-section class="h-full relative">
  <div class="w-full h-full absolute top-0" id="fixed-target"></div>
    <nav
      data-scroll 
      data-scroll-sticky 
      data-scroll-target="#fixed-target"  
      class="fixed left-0 top-0 flex items-center justify-center w-full mt-20 space-x-10 xs:space-x-20 sm:space-x-40 text-center text-white z-50">
      <a href="#about" 
          @click.prevent="scrollTo('#about')"
          class="link link-plug-left text-white hover:text-bg">КТО МЫ</a>
      <a href="#projects" 
          @click.prevent="scrollTo('#projects')"
          class="link link-plug-right text-white hover:text-bg">ЧТО МЫ</a>
      <a href="#contacts" 
          @click.prevent="scrollTo('#contacts')"
          class="link link-plug-left text-white hover:text-bg">ГДЕ МЫ</a>
    </nav>
    <div 
      data-scroll 
      data-scroll-sticky 
      data-scroll-target="#fixed-target" 
      class="logo fixed inset-0 w-full flex flex-nowrap items-center justify-center h-screen min-full-vh max-full-vh pointer-events-none z-30">
      <div>N</div>
      <div>O</div>
      <div>R</div>
      <div>M</div>
    </div>
  
  <section class="h-screen min-full-vh max-full-vh flex flex-col items-center justify-end relative z-30">
  	<h1 data-scroll class="is-not-inview hero-title text-center text-white uppercase"><?= $site->hero_title() ?></h1>
  </section>
  <section id="about" class="min-h-screen flex flex-col items-center justify-center relative z-30">
  	<div data-scroll class="is-not-inview w-full max-w-full xs:w-5/6 sm:w-3/4 md:w-1/2 text-center px-10">
  		<h2 class="text-rounded break-words"><?= $site->about_text() ?></h2>	
  	</div>
  </section>
  <section id="projects" class="pt-1/2-screen pb-200">
    <div class="flex flex-col items-center justify-center">
      <?php $idx=0; foreach ($site->projects()->toStructure() as $item): ?>
        <div data-scroll class="is-not-inview project w-8/12 sm:w-6/12 md:w-5/12">
          <div class="relative hover:scale-105 transform-gpu transition ease-in-out-sine duration-200">
            <div class="w-full image" style="padding-bottom: 120%">
              <?php if ($image = $item->image()->toFile()): ?>
                <img data-src="<?= $image->url() ?>" alt="image_project" class="lazyload">
              <?php endif ?>
            </div>
            <?php if ($logo = $item->logo()->toFile()): ?>
              <div class="flex items-center justify-center w-4/5 mx-auto inset-0 absolute p-20">
                <img data-src="<?= $logo->url() ?>" alt="image_project" class="lazyload">
              </div>
            <?php endif ?>
          </div>
        </div>
      <?php $idx+=1; endforeach ?>
    </div>
  </section>
  <footer id="contacts" class="h-screen min-full-vh max-full-vh flex flex-col items-center justify-end pb-25 md:pb-30 relative z-30">
    <div class="flex space-x-10 mb-25">
      <?php if ($site->instagram()->isNotEmpty()): ?>
        <?= Html::a($site->instagram(), 'INSTAGRAM', ['target' => '_blank', 'class' => 'link link-plug-right link-plug-visible text-bg']) ?>
      <?php endif ?>
      <?php if ($site->telegram()->isNotEmpty()): ?>
        <?= Html::a($site->telegram(), 'TELEGRAM', ['target' => '_blank', 'class' => 'link link-plug-left link-plug-visible text-bg']) ?>
      <?php endif ?>
    </div>
    <div class="text-white text-center">
      SITE BY <a href="https://whiterussian.studio/" target="_blank" class="link link-plug-left text-white hover:text-bg">WHITE RUSSIAN</a>
    </div>
  </footer>
</div>


<?= snippet('footer') ?>
