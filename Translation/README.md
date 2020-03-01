# Week 5 Media Translation

## Presentation: [Slides](https://drive.google.com/file/d/1GoChCMzgVu9WdHH4V7bo1so4epcJXNDB/view?usp=sharing)

### Media Translation
- Image to Image
  - Fast style transfer
  - Pix2pix Edges to pikachu
  - Photo Styles Tansfer
  - Photo Sketch with p5js
  - CycleGAN
- Image verses Text
  - Text to Image(AttnGAN)
  - Image to Text

### Coding Session
#### Get started
To run each examples, open your terminal, type in the following commands:
```
$ git clone git@github.com:runwayml/Intro-Synthetic-Media.git
$ cd Intro-Synthetic-Media
$ python -m SimpleHTTPServer 8001    # $ python3 -m http.server 8001 (if you are using python 3)
```
Go to `localhost:8001` in your browser, you will see a directory list like this:
```
Directory listing for /
.DS_Store
.git/
.gitignore
Design/
ImgGeneration/
ImgSegmentation/
Intro/
LICENSE
README.md
Text/
Translation/
```

Click into each folder, you will see the example for each folder.

### Demos
- [Fast style transfer with ml5js](https://runwayml.github.io/Intro-Synthetic-Media/Translation/styleTransfer-ml5/StyleTransfer_Video/)
- [Pix2pix Edges to pikachu with ml5js](https://runwayml.github.io/Intro-Synthetic-Media/Translation/pix2pix-ml5)

The following examples requires running the model in Runway at `localhost:8000`
- [Photo Styles Tansfer with p5js and Runway](https://runwayml.github.io/Intro-Synthetic-Media/Translation/photostylestansfer/)
- [Photo Sketch with p5js and Runway](https://runwayml.github.io/Intro-Synthetic-Media/Translation/PhotoSketch)
- [CycleGAN with p5js and Runway](https://runwayml.github.io/Intro-Synthetic-Media/Translation/CycleGAN)
- [Text to Image with p5js and Runway](https://runwayml.github.io/Intro-Synthetic-Media/Translation/Text2Image)
- [Image to Text with p5js and Runway](https://runwayml.github.io/Intro-Synthetic-Media/Translation/im2txt/)

### Resources
* [ml5js Style Transfer](https://learn.ml5js.org/docs/#/reference/style-transfer)
* [Train your own style transfer with Spell](https://github.com/yining1023/styleTransfer_spell), [Video](https://www.youtube.com/watch?v=gye9hSIrRWI)
* [ml5js Pix2pix](https://learn.ml5js.org/docs/#/reference/pix2pix)
* [Train your own pix2pix](https://github.com/yining1023/pix2pix_tensorflowjs_lite), [pix2pix on Spell](https://github.com/yining1023/pix2pix_spell)
* [FastPhotoStyle](https://github.com/NVIDIA/FastPhotoStyle)
* [PhotoSketch](https://perso.telecom-paristech.fr/boubek/papers/PhotoSketch/)
* [CycleGAN](https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix)
* [Text to Image(AttnGAN)](https://github.com/taoxugit/AttnGAN)
* [im2txt](https://github.com/tensorflow/models/tree/master/research/im2txt)

### Homework
- Keep working on the final project
  - Make the idea more clear, find a good scope for your project
  - Make experiments on the idea, and document your progress with images/videos
  - Ask for help from teachers/residents/classmates, if you have any roadblocks for the projects
