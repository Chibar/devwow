"""
Проверяет, что JSON-фикстуры из `fixtures/` валидны по схемам из `schemas.py`.

Это же — готовый тест контрактов для бэкенда: замените чтение файла
на запрос к своему эндпоинту, и получите проверку совместимости с фронтом.

Запуск: python validate_fixtures.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from pydantic import TypeAdapter, ValidationError

import schemas as s

BASE = Path(__file__).parent / "fixtures"

# эндпоинт -> тип ответа
CASES: dict[str, object] = {
    "navigation": list[s.NavLink],
    "hero": s.Hero,
    "clients": list[s.Client],
    "technologies": list[s.Technology],
    "services": list[s.Service],
    "portfolio": list[s.PortfolioCase],
    "team": list[s.TeamMember],
    "posts": list[s.Post],
    "reviews": list[s.Review],
    "faq": list[s.FaqItem],
    "contact": s.ContactBlock,
    "footer": s.SiteFooter,
    "about": s.AboutPage,
    "services-page": s.ServicesPage,
    "projects-page": s.ProjectsPage,
    "blog-page": s.BlogPage,
    "contacts-page": s.ContactsPage,
}


def check(name: str, model: object, payload: object) -> str | None:
    try:
        TypeAdapter(model).validate_python(payload)
    except ValidationError as error:
        first = error.errors()[0]
        loc = ".".join(str(part) for part in first["loc"])
        return f"{name}: {loc} — {first['msg']}"
    return None


def main() -> int:
    failures: list[str] = []
    checked = 0

    for name, model in CASES.items():
        payload = json.loads((BASE / f"{name}.json").read_text("utf-8"))
        checked += 1
        if error := check(name, model, payload):
            failures.append(error)

    for path in sorted((BASE / "articles").glob("*.json")):
        payload = json.loads(path.read_text("utf-8"))
        checked += 1
        if error := check(f"articles/{path.stem}", s.ArticleDetail, payload):
            failures.append(error)

    if failures:
        print(f"Провалено {len(failures)} из {checked}:\n")
        for failure in failures:
            print(f"  ✗ {failure}")
        return 1

    print(f"Все {checked} фикстур валидны по схемам.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
