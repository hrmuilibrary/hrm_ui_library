import{j as e}from"./jsx-runtime-BqmoapDQ.js";import{r as i}from"./iframe-DHpVuXvq.js";import{M as C,N as I}from"./NestedMenu-DGTI0NkR.js";import{B as b}from"./Button-f4IX_wZv.js";import{I as y}from"./IconArrowDownloadFilled-keOPcnE-.js";import{I as g,a as h,b as x}from"./IconBeach-C_3I00Bs.js";import{I as M}from"./IconMore-B-2dxT_E.js";import{I as O}from"./IconCheckmark-apG3r9Ff.js";import{I as n}from"./IconSettings-DCleU5l8.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DM2h_I7-.js";import"./index-CIV4x0JM.js";import"./Text-CQb0NJCu.js";import"./helpers-S_VV4SWp.js";import"./index-AboGxAif.js";import"./types-BWtzIJg-.js";import"./index-DEC1Eyrh.js";import"./Popover-BtRnMwV2.js";import"./IconDismiss-BtOO7fMq.js";import"./Link-kPf14Kl3.js";import"./CollapseGroup-POcthP33.js";import"./Divider-DIp7R1Lo.js";import"./AnimatePresenceWrapper-DqNCNRqI.js";import"./IconChevronDown-DBAaal69.js";import"./IconChevronUp-hRLFgAJc.js";import"./IconChevronRight-D5IoJkzj.js";import"./AvatarGroup-BP-vET-7.js";import"./DropzoneFileUpload-CCD5DWnB.js";import"./Label-G6RiTXGP.js";import"./useFormProps-ChvxJIL1.js";import"./ErrorMessage-W7E8staV.js";import"./IconDynamicComponent-rlgd6MjX.js";import"./Snackbar-BJgs3BPe.js";import"./Alert-D0I8Wlqz.js";import"./IconDismissFilled-CytL62Vp.js";import"./Progress-CmueRCnV.js";import"./IconAdd-D6R4GCYk.js";import"./Checkbox-BKih-2kv.js";import"./IconInfo-CXGDHQpl.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
