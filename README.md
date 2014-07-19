sprites_tool
============
(English below)

#日本語
###Sprites Toolとは
画像の一部だけを表示したい場合は、cssのスプライトで一部だけ表示するのですが、表示したい画像のwidthやheightを入力する必要があります。それらの値を取得するためにはフォトショップやMacの場合だとプレビューで調べる訳ですが、面倒なのでSprites Toolを作ってみました。

###使い方
各ボタンで画像の幅や位置を変更可能です。

読み込む画像のURLを変更する際は、"Change URL"をクリックし、表示される入力欄にURLを入れると画像が変わります。

画面右上には読み込んでいる画像全体を表示しています。これをクリックするとtoggle（消えたり・表示されたり）します。Change URLボタンの隣にある小さい画像をクリックした際も、同様にtoggleします。

変更された画像のサイズや位置の値はブラウザのストレージに保存されるので、ブラウザのタブを閉じてしまっても、またページにアクセスすれば元の画面が表示されます。

ブログや他のページに、このツールで作成した画像を使いたい場合は、textareaに表示してあるHTMLのコードをコピー・アンド・ペーストすれば同じ表示になります。

###デモページ
<http://projects.watarusekiguchi.com/sprites_tool/index.html>

###ライセンス
MITです。

#English
###What is Sprites Tool?
If you want to show a part of an image, you need to use CSS Sprites. When you use CSS Sprites, you need values of Width and Height, and you need to use photoshop or preview (on Mac) to examine them in advance. I think that it's kind of troublesome, so I made this tool.

###How to use
It's easy to use this tool. You can change position and size of the images with some buttons.

When you want to change to other images, click "Change URL", and the url form appears.

Top-right image is a whole image. When you click it, it toggles (disapper or appear). When you click the top small image, next to Change URL button, the top-right image toggles.

After you change size and position of the image, thier values are saved to web browser's storage. Even if you closed the tab on browser, you can see the same view on new tab when you can access the url.

HTML codes are automatically generated. You can use them to show the same size and position of the image on your blog or site.
 
###Demo page
 
 <http://projects.watarusekiguchi.com/sprites_tool/index.html>

###license
MIT license