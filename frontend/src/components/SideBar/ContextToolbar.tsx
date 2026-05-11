import React from 'react';
import { Filter, FolderPlus, Plus } from 'lucide-react';
import { appStore } from '@/lib/store';

interface ContextToolbarProps {
  mode: string;
  onAddCollection?: () => void;
  onAddEnvVar?: () => void;
}

export const ContextToolbar: React.FC<ContextToolbarProps> = ({
  mode,
  onAddCollection,
  onAddEnvVar
}) => {
  const renderTitle = () => {
    switch (mode) {
      case 'collections': return "Explorer";
      case 'history': return "Timeline";
      case 'env': return "Config";
      default: return "";
    }
  };

  return (
    <div className="px-4 py-4 flex items-center justify-between shrink-0 sticky top-0 z-30 bg-near-black/50 backdrop-blur-md">
      <h2 className="font-black text-slate-500 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 select-none px-1">
        {renderTitle()}
      </h2>
      
      <div className="flex items-center gap-1.5">
        {mode === 'collections' && (
          <>
            <button 
              onClick={() => appStore.showToast('Filtering not implemented', 'info')} 
              className="p-2 text-slate-500 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/5" 
              title="Filter"
            >
              <Filter size={14}/>
            </button>
            <button 
              onClick={onAddCollection} 
              className="p-2 text-slate-500 hover:text-electric-violet rounded-xl hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/5" 
              title="New Collection"
            >
              <FolderPlus size={16}/>
            </button>
          </>
        )}
        {mode === 'env' && (
          <button 
            onClick={onAddEnvVar} 
            className="p-2 text-slate-500 hover:text-electric-violet rounded-xl hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/5" 
            title="Add Variable"
          >
            <Plus size={16}/>
          </button>
        )}
      </div>
    </div>
  );
};