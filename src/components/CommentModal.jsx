"use client";
import { useRecoilState } from 'recoil';
import { modalState } from '@/atom/modelAtom';

function CommentModal() {
    const [open,setOpen] = useRecoilState(modalState);
  return (
    <div>CommentModal
        {
            open && <h1>The modal is open</h1>
        }
    </div>
  )
}

export default CommentModal