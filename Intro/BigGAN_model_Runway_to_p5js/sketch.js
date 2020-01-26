// Copyright (C) 2018 Runway AI Examples
// 
// This file is part of Runway AI Examples.
// 
// Runway-Examples is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// Runway-Examples is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Runway.  If not, see <http://www.gnu.org/licenses/>.

// BigGAN Demo:
// Sends an image to Runway via HTTP Post request, get an image of a cat back
// You can change 'tiger cat' to other categories, you can find other categories here: https://github.com/agermanidis/BigGAN/blob/master/categories.json. Be careful about the uppercases and lowercases.

// Update the following url based on the server address shown in your Runway app under Input--Network
const url = 'http://localhost:8000/query';

function setup() {
  noCanvas();
  createButton('generate').mousePressed(generate);
}

function generate() {
  const vector = [];
  for (let i = 0; i < 128; i++) {
    vector[i] = random(-1, 1);
  }

  const inputs = {
    z: vector,
    category: 'tiger cat'
  };

  httpPost(url, 'json', inputs, function(data) {
    if (data.generated_output) {
      const img = createImg(data.generated_output);
      img.size(512, 512);
    }
  });
}
