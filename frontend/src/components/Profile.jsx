import User from '../assets/user.png';

export default function Profile() {
    return (
        <div class="flex mb-4">
            <div class="flex ml-auto mr-0">
                <button>Artis Paraudziņš ⏷</button>
                <img src={User} class="h-12 ml-2" />
            </div>
        </div>
    )
}