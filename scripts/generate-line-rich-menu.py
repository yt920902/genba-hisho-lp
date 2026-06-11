from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public"
WIDTH = 2500
HEIGHT = 843
COLS = [(0, 834), (834, 833), (1667, 833)]

NAVY = "#0f2742"
NAVY_2 = "#123556"
NAVY_3 = "#183f63"
ORANGE = "#f47b2a"
WHITE = "#ffffff"
MUTED = "#cbd7e4"

FONT_REGULAR = "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc"
FONT_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W9.ttc"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, size)


def centered_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: str,
) -> None:
    bbox = draw.textbbox((0, 0), text, font=fnt)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((xy[0] - tw / 2, xy[1] - th / 2), text, font=fnt, fill=fill)


def rounded(draw: ImageDraw.ImageDraw, box, radius: int, fill: str, outline=None, width: int = 1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def icon_bubble(draw: ImageDraw.ImageDraw, cx: int, cy: int) -> None:
    rounded(draw, (cx - 92, cy - 62, cx + 92, cy + 54), 38, "#fff4eb", ORANGE, 8)
    draw.polygon([(cx - 34, cy + 50), (cx - 70, cy + 98), (cx - 8, cy + 58)], fill="#fff4eb", outline=ORANGE)
    draw.line([(cx - 30, cy - 12), (cx + 48, cy - 12)], fill=ORANGE, width=9)
    draw.line([(cx - 48, cy + 18), (cx + 66, cy + 18)], fill=ORANGE, width=9)


def icon_doc(draw: ImageDraw.ImageDraw, cx: int, cy: int) -> None:
    rounded(draw, (cx - 72, cy - 92, cx + 78, cy + 96), 18, "#f7fbff", WHITE, 7)
    draw.polygon([(cx + 35, cy - 92), (cx + 78, cy - 50), (cx + 35, cy - 50)], fill="#dbeafe")
    draw.line([(cx - 38, cy - 34), (cx + 36, cy - 34)], fill=ORANGE, width=9)
    draw.line([(cx - 38, cy + 4), (cx + 46, cy + 4)], fill=NAVY_3, width=8)
    draw.line([(cx - 38, cy + 42), (cx + 22, cy + 42)], fill=NAVY_3, width=8)


def icon_helmet(draw: ImageDraw.ImageDraw, cx: int, cy: int) -> None:
    draw.pieslice((cx - 98, cy - 88, cx + 98, cy + 108), 180, 360, fill="#fff4eb", outline=ORANGE, width=8)
    draw.rectangle((cx - 98, cy + 8, cx + 98, cy + 56), fill="#fff4eb", outline=ORANGE, width=8)
    draw.line([(cx, cy - 76), (cx, cy + 48)], fill=ORANGE, width=9)
    draw.line([(cx - 58, cy + 58), (cx + 58, cy + 58)], fill=WHITE, width=14)
    draw.rounded_rectangle((cx - 128, cy + 50, cx + 128, cy + 82), radius=16, fill=ORANGE)


def draw_panel(draw: ImageDraw.ImageDraw, x: int, w: int, title: str, desc: str, chip: str, icon_fn, accent: str) -> None:
    cx = x + w // 2
    rounded(draw, (x + 44, 54, x + w - 44, HEIGHT - 54), 44, NAVY_2, "#284c6f", 3)
    icon_fn(draw, cx, 210)
    centered_text(draw, (cx, 383), title, font(82, True), WHITE)

    lines = desc.split("\n")
    for i, line in enumerate(lines):
        centered_text(draw, (cx, 500 + i * 58), line, font(38, True), MUTED)

    chip_fill = accent
    rounded(draw, (x + 150, 650, x + w - 150, 742), 28, chip_fill)
    centered_text(draw, (cx, 697), chip, font(34, True), WHITE)


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    img = Image.new("RGB", (WIDTH, HEIGHT), NAVY)
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, WIDTH, 110), fill="#102f4e")
    draw.line((833, 130, 833, HEIGHT - 64), fill="#355574", width=4)
    draw.line((1666, 130, 1666, HEIGHT - 64), fill="#355574", width=4)

    draw_panel(
        draw,
        COLS[0][0],
        COLS[0][1],
        "無料相談",
        "見積書作成の\nお悩みを相談",
        "チャットで相談",
        icon_bubble,
        ORANGE,
    )
    draw_panel(
        draw,
        COLS[1][0],
        COLS[1][1],
        "サービス内容",
        "現場秘書で\nできること",
        "LPで確認",
        icon_doc,
        ORANGE,
    )
    draw_panel(
        draw,
        COLS[2][0],
        COLS[2][1],
        "開発状況",
        "現在開発中の\n機能を見る",
        "予定を見る",
        icon_helmet,
        ORANGE,
    )

    image_path = OUT_DIR / "line-rich-menu.png"
    img.save(image_path, "PNG", optimize=True)

    areas = {
        "size": {"width": WIDTH, "height": HEIGHT},
        "selected": True,
        "name": "現場秘書 リッチメニュー",
        "chatBarText": "メニュー",
        "areas": [
            {
                "bounds": {"x": 0, "y": 0, "width": 834, "height": HEIGHT},
                "action": {"type": "message", "text": "無料相談をお願いします"},
            },
            {
                "bounds": {"x": 834, "y": 0, "width": 833, "height": HEIGHT},
                "action": {"type": "uri", "uri": "https://genba-hisho-lp.vercel.app/#service"},
            },
            {
                "bounds": {"x": 1667, "y": 0, "width": 833, "height": HEIGHT},
                "action": {"type": "uri", "uri": "https://genba-hisho-lp.vercel.app/#development"},
            },
        ],
    }
    (OUT_DIR / "line-rich-menu-areas.json").write_text(
        json.dumps(areas, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
