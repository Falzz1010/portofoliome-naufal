import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { X } from 'react-feather';

interface CertificateModalProps {
  isOpen: boolean;
  closeModal: () => void;
  certificate: {
    title: string;
    issuer: string;
    date: string;
    image: string;
    description?: string;
  } | null;
}

export default function CertificateModal({ isOpen, closeModal, certificate }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-zinc-900 p-6 shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute right-0 top-0 z-10 p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                  
                  <div className="space-y-4">
                    {/* Certificate Image */}
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-3">
                      <Dialog.Title className="text-2xl font-medium text-white">
                        {certificate.title}
                      </Dialog.Title>
                      
                      <div className="flex items-center text-zinc-400 text-sm">
                        <span>{certificate.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{certificate.date}</span>
                      </div>

                      {certificate.description && (
                        <p className="text-zinc-300 leading-relaxed">
                          {certificate.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 