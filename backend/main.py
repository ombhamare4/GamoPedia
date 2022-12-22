from ariadne.asgi import GraphQL
from ariadne import ObjectType, QueryType, gql, make_executable_schema
from starlette.middleware.cors import CORSMiddleware
import json
import requests
import os
from dotenv import load_dotenv
load_dotenv('.env')


api_key = os.getenv('API_KEY')
print(api_key)

type_defs = gql("""
    type Game{
        id:ID!
        slug:String!
        name:String!
        released: String!
        tba: Boolean!
        background_image: String!
        rating: Float!
        rating_top: Int!
        ratings: [rating]
        ratings_count: Int!
        reviews_text_count: Int!
        added: Int!
        added_by_status: added_by_status
        metacritic:Int!
        playtime:Int!
        suggestions_count: Int!
        updated: String!
        reviews_count: String!
        saturated_color: String!
        dominant_color: String!
        platforms: [platform]

        description: String
        name_original:String
        metacritic_platforms:[metacritic_platforms]
        background_image_additional: String
        website:String
        screenshots_count: Int
        movies_count: Int
        creators_count: Int
        achievements_count: Int
        parent_achievements_count: Int
        reddit_url: String
        reddit_name: String
        reddit_description: String
        reddit_logo: String
        reddit_count: Int
        twitch_count: Int
        youtube_count: Int
        alternative_names: [String]
        metacritic_url:String
        parents_count: Int
        additions_count: Int
        game_series_count: Int
        parent_platforms:[parent_platforms]
        stores: [stores]
        developers:[developers]
        genres: [genres]!
        tags: [tags]
        publishers:[publishers]
        description_raw: String
    }
    type rating{
        id: ID!
        title:String!
        count: Int!
        percent:Float!
    }
    type added_by_status{
        yet: Int!
        owned: Int!
        beaten: Int!
        toplay: Int!
        dropped:Int!
        playing: Int!
    }

    type platform{
        platform: platform_type_obj
        released_at: String!
        requirements_en: requirements_en
    }
    type platform_type_obj{
        id: ID!
        name: String!
        slug: String!
        image: String
        year_end: String
        year_start: String
        games_count: Int!
        image_background: String!

    }
    type requirements_en{
        minimum: String!
        recommended: String!
    }

    type metacritic_platforms{
        metascore:Int
        url: String
        platform: metacritic_platforms_platform
    }
    type metacritic_platforms_platform{
        platform: Int
        name: String
        slug: String
    }

    type parent_platforms{
        platform: parent_platforms_platform
    }
    type parent_platforms_platform{
        id: Int
        name: String
        slug: String
    }
    type stores{
        id:ID!
        url:String
        store: store_detail
    }

    type store_detail{
        id:ID!
        name: String
        slug: String
        domain: String
        game_count: Int
        image_background: String
    }

    type developers{
        id: ID!
        name: String
        slug: String
        game_count:Int
        image_background: String
    }
    type genres{
        id: ID!
        name: String
        slug: String
        game_count:Int
        image_background: String
    }
    type tags{
        id: ID!
        name: String
        slug: String
        game_count:Int
        language:String
        image_background: String
    }
    type publishers{
        id: ID!
        name: String
        slug: String
        game_count:Int
        image_background: String
    }

    type Genre {
        id: ID
        name: String
        slug: String
        games_count: Int
        image_background:  String
        games: [Game]
    }

    type Query {
        hello: String!
        games: [Game]
        game_by_id(game_pk:String!): Game!
        genres: [Genre]
    }
""")


query_type = QueryType()


@query_type.field("hello")
def resolve_hello(*_):
    return "Hello world!"


@query_type.field("games")
def resolve_games(*_):
    response_API = requests.get(
        'https://api.rawg.io/api/games?key={}'.format(api_key))
    data = response_API.text
    parse_json = json.loads(data)
    result = parse_json['results']
    return result


@query_type.field("game_by_id")
def resolve_games_by_id(_, info, game_pk):
    response_API = requests.get(
        'https://api.rawg.io/api/games/{}?key={}'.format(game_pk, api_key))
    data = response_API.text
    parse_json = json.loads(data)
    result = parse_json
    return result

@query_type.field("genres")
def resolve_genres(*_):
    response_API = requests.get('https://api.rawg.io/api/genres?key={}'.format(api_key))
    data = response_API.text
    parse_json = json.loads(data)
    result = parse_json['results']
    # print(result)
    return result

schema = make_executable_schema(type_defs, query_type)
app = CORSMiddleware(GraphQL(schema, debug=True),allow_origins=['*'], allow_methods=("GET", "POST", "OPTIONS"))
