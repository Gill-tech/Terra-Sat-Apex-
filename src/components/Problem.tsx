import { ImageWithFallback } from './figma/ImageWithFallback';

export function Problem() {
  return (
    <section className="py-20 bg-[#0F2626]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">The Challenge</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Floods and droughts cause significant loss of life and economic damage across Kenya. 
            Current warning systems are fragmented, slow, and don't reach communities in time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1618856445394-259e67220916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGRpc2FzdGVyJTIwa2VueWElMjBhZnJpY2F8ZW58MXx8fHwxNzY5MjgxNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Flood impact in Kenya"
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl text-white mb-2">Floods</h3>
              <p className="text-gray-300">Fast-onset disasters requiring rapid detection and warning</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1761068755750-61708f3619ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm91Z2h0JTIwY3JhY2tlZCUyMGVhcnRoJTIwYWZyaWNhfGVufDF8fHx8MTc2OTI4MTU1MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Drought conditions in East Africa"
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl text-white mb-2">Droughts</h3>
              <p className="text-gray-300">Slow-onset risks requiring seasonal monitoring and forecasting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
